using System;
using System.Collections.Generic;
using System.Linq;

namespace memelationlastchallenge.Utils
{
    public class MemeConversor
    {
        ComentarioConversor cont = new ComentarioConversor();
        public Models.TbMemelation ForTable(Models.Request.MemeRequest req)
        {
            return new Models.TbMemelation {
                DtInclusao = DateTime.Now,
                DsCategoria = req.categoria,
                DsHashtags = req.hashtags,
                NmAutor = req.autor,
                BtMaior = req.maior
            };
        }

        public Models.TbMemelation ForTableAlt(Models.Request.MemeAltResponse alt)
        {
            return new Models.TbMemelation {
                DtInclusao = DateTime.Now,
                DsCategoria = alt.categoria,
                DsHashtags = alt.hashtags,
                NmAutor = alt.autor,
                BtMaior = alt.maior,
                DsImagem = alt.imagem
            };
        }
        public Models.Response.MemeResponse ForResponse(Models.TbMemelation req)
        {
            return new Models.Response.MemeResponse {
                maior = req.BtMaior,
                autor = req.NmAutor,
                categoria = req.DsCategoria,
                hashtags = req.DsHashtags,
                id = req.IdMeme,
                curtidas =  req.QtdCurtidas,
                inclusao = req.DtInclusao,
                imagem = req.DsImagem
            };
        }

        public Models.Response.MemeComentarioResponse ForMemeComentario(Models.TbMemelation tb)
        {
            return new Models.Response.MemeComentarioResponse {
                maior = tb.BtMaior,
                autor = tb.NmAutor,
                categoria = tb.DsCategoria,
                hashtags = tb.DsHashtags,
                id = tb.IdMeme,
                inclusao = tb.DtInclusao,
                curtidas = tb.QtdCurtidas,
                imagem = tb.DsImagem,
                comentarios = tb.TbComentario.Select(x => 
                    cont.ForResponse(x)
                ).ToList()
            };
        }

        public List<Models.Response.MemeComentarioResponse> ForListaMemeComentario (List<Models.TbMemelation> tbs)
        {
            return tbs.Select(x => this.ForMemeComentario(x)).ToList();
        }
    }
}