import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Box } from "@mui/material";

// URL da API
const url = "http://localhost:3000/noticias";

const EditarNoticia = () => {
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [texto, setTexto] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/${id}`);
        const { titulo, subtitulo, texto } = response.data;
        setTitulo(titulo);
        setSubtitulo(subtitulo);
        setTexto(texto);
      } catch (error) {
        console.error("Erro ao carregar a notícia: ", error);
      }
    };
    fetchData();
  }, [id]);

  const atualizarNoticia = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${url}/${id}`, { titulo, subtitulo, texto });
      navigate("/admin-noticias");
    } catch (error) {
      console.error("Erro ao atualizar a notícia: ", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={atualizarNoticia}
      noValidate
      sx={{ mt: 3, p: 4, backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
      <Typography variant="h4" gutterBottom>
        Editar Notícia
      </Typography>
      <TextField
        label="Título"
        fullWidth
        margin="normal"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <TextField
        label="Subtítulo"
        fullWidth
        margin="normal"
        value={subtitulo}
        onChange={(e) => setSubtitulo(e.target.value)}
      />
      <TextField
        label="Texto"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Atualizar
      </Button>
    </Box>
  );
};

export default EditarNoticia;