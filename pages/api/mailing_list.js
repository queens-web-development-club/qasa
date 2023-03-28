import clientPromise from "@/lib/mongodb";

{/** Endpoint for MongoDB mailing list database */}
export default async (req, res) => {
    const client = await clientPromise;
    const db = client.db("qasa-textdata");
    const collection = await db.collection('mailing-list')

    {/** You might want something like for a GET method */}
    const list = await db
        .collection("mailing-list")
        .find({})
        .toArray();

    if (req.method === 'POST') {
        const { email } = req.body;
        await collection.insertOne({ email });
        return res.json({ message: 'Email added to mailing list' });
    }

    client.close();
    req.json({ message: 'Invalid method request' })
};