using System;
using System.Linq;

namespace memelationlastchallenge.Database
{
    public class ComentarioDatabase
    {
        Models.memelationContext ctx = new Models.memelationContext();
        public Models.TbComentario inserir(Models.TbComentario coment)
        {
            ctx.TbComentario.Add(coment);
            ctx.SaveChanges();
            return coment;
        }

        public Models.TbComentario deletar(Models.TbComentario coment)
        {
            ctx.TbComentario.Remove(coment);
            ctx.SaveChanges();
            return coment;
        }   

        public Models.TbComentario consultarPorID(int id)
        {
            return ctx.TbComentario.FirstOrDefault(x => x.IdComentario == id);
        }

        public Models.TbMemelation consultarMemeID(int id)
        {
            return ctx.TbMemelation.FirstOrDefault(x => x.IdMeme == id);
        }    
    }
}