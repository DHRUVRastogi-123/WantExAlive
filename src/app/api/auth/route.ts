export async function GET(request : Request) {
    return new Response(JSON.stringify({ message: "Fetching user data..." }), {
        status: 200,
    });
}

export async function POST(request : Request) {
    return new Response(JSON.stringify({ message: "Posting user data..." }), {
        status: 200,
    });
}