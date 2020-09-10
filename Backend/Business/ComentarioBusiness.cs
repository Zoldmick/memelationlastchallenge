using System;

namespace memelationlastchallenge.Business
{
    public class ComentarioBusiness
    {
        Database.ComentarioDatabase data = new Database.ComentarioDatabase();
        public Models.TbComentario inserir(Models.TbComentario req)
        {
            if(string.IsNullOrEmpty(req.DsComentario))
                throw new ArgumentException("Comentario está vazio");

            if(data.consultarMemeID(req.IdMeme) == null)
                throw new ArgumentException("ID meme não existe");

            return data.inserir(req);
        }

        public Models.TbComentario deletar(int id)
        {
            Models.TbComentario coment = data.consultarPorID(id);

            if(coment == null) 
            throw new ArgumentException("ID não existe");

            return data.deletar(coment);
        }
    }
}