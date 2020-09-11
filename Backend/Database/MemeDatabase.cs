using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace memelationlastchallenge.Database
{
    public class MemeDatabase
    {
        Models.memelationContext ctx = new Models.memelationContext();
        public Models.TbMemelation inserir(Models.TbMemelation ml)
        {
            ctx.TbMemelation.Add(ml);
            ctx.SaveChanges();
            return ml;
        }

        public List<Models.TbMemelation> consultar(bool maior)
        {
            return ctx.TbMemelation
                            .Include(x => x.TbComentario)
                            .Where(x => x.BtMaior == maior)
                            .ToList();
        }

        public Models.TbMemelation alterar(int id,Models.TbMemelation ml)
        {
           Models.TbMemelation alt = this.consultarPorID(id);
           alt.NmAutor = ml.NmAutor;
           alt.BtMaior = ml.BtMaior;
           alt.DsCategoria = ml.DsCategoria;
           alt.DsHashtags = ml.DsHashtags;
           alt.DsImagem = ml.DsImagem;
           alt.DtInclusao = ml.DtInclusao;

           ctx.SaveChanges();
           return alt;
        }

        public Models.TbMemelation deletar(Models.TbMemelation del)
        {
            ctx.TbMemelation.Remove(del);
            ctx.SaveChanges();

            List<Models.TbComentario> coments =  ctx.TbComentario.Where(x => x.IdMeme == del.IdMeme).ToList();
            ctx.TbComentario.RemoveRange(coments);

            ctx.SaveChanges();
            return del;
        }

        public Models.TbMemelation cadastrar(Models.TbMemelation ml)
        {
            ctx.TbMemelation.Add(ml);
            ctx.SaveChanges();
            return ml;
        }
        
        public Models.TbMemelation consultarPorID(int id)
        {
            return ctx.TbMemelation.FirstOrDefault(x => x.IdMeme == id);
        }

        public int curtidas(Models.TbMemelation curt)
        {
            curt.QtdCurtidas += 1;
            ctx.SaveChanges();

            return curt.QtdCurtidas;
        }
    }
}