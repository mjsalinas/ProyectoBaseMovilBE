const { createClient } = require("@supabase/supabase-js");

const supabase = require("../supabaseClient");


const supabaseAnonClient= createClient
(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

exports.getAllBooks = async (req , res) => {
    const {data, error} = await supabaseAnonClient.from("books").select("*");
     if (error) return res.status(500).json({
        error: error.message
    });
    res.json({data});
    return res;
};

exports.createBook = async ( req , res) => {
    const { title, author, publisher, publication_year, genre, description, cover_image_url } = req.body;
    
    const {data, error} = await supabaseAnonClient.from("books").insert([
{ title, author, publisher, publication_year, genre, description, cover_image_url }]
     );

if (error) return res.status(500).json({
        error: error.message
    });
     res.status(201).json(data);
     return res;
}

// actualizar un libro
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, description, publication_year } = req.body;
  const { data, error } = await supabaseAnonClient
    .from("books")
    .update({title, author, description, publication_year })
    .eq("id", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

// eliminar un libro
exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabaseAnonClient.from("books").delete().eq("id", id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
};