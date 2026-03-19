export default {
    async fetch(request, env, ctx) {
        // Handle CORS preflight requests
        if (request.method === "OPTIONS") {
            return new Response(null, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type",
                },
            });
        }

        const url = new URL(request.url);
        
        // POST API: Save new review data
        if (request.method === "POST" && url.pathname === "/api/reviews") {
            try {
                const data = await request.json();
                
                // Validate required fields
                if (!data.rating || !data.purpose) {
                    return new Response(JSON.stringify({ success: false, error: "Missing required fields" }), {
                        status: 400,
                        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
                    });
                }

                // Calculate Sri Lanka Time (UTC+5:30)
                const now = new Date();
                const slTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
                const formattedTime = slTime.toISOString().replace('T', ' ').substring(0, 19);

                // Insert into D1 Database
                const { success } = await env.DB.prepare(
                    `INSERT INTO reviews (lang, rating, name, phone, address, purpose, message, created_at) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
                ).bind(
                    data.lang || "si",
                    data.rating,
                    data.name || "Anonymous",
                    data.phone || "-",
                    data.address || "-",
                    data.purpose,
                    data.message || "-",
                    formattedTime
                ).run();

                return new Response(JSON.stringify({ success }), {
                    status: 200,
                    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
                });

            } catch (err) {
                return new Response(JSON.stringify({ success: false, error: err.message }), {
                    status: 500,
                    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
                });
            }
        }
        
        // GET API: Retrieve all reviews (for Dashboard)
        if (request.method === "GET" && url.pathname === "/api/reviews") {
            try {
                const { results } = await env.DB.prepare("SELECT * FROM reviews ORDER BY created_at DESC").all();
                return new Response(JSON.stringify({ success: true, reviews: results }), {
                    status: 200,
                    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
                });
            } catch (err) {
                return new Response(JSON.stringify({ success: false, error: err.message }), {
                    status: 500,
                    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
                });
            }
        }

        // 404 For anything else
        return new Response("Not found", { status: 404 });
    }
};
