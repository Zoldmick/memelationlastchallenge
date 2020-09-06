using System;

namespace memelationlastchallenge.Utils
{
    public class ComentarioConversor
    {
        public Models.TbComentario ForTable (Models.Request.ComentarioRequest req)
        {
            return new Models.TbComentario {
                IdMeme = req.id_meme,
                DsComentario = req.comentario                
            };
        }

        public Models.Response.ComentarioResponse ForResponse (Models.TbComentario req)
        {
            return new Models.Response.ComentarioResponse {
                id = req.IdComentario,
                id_meme = req.IdMeme,
                comentario = req.DsComentario
            };
        }
    }
}