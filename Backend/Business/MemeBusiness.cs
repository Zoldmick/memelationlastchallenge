using System;
using System.Collections.Generic;

namespace memelationlastchallenge.Business
{
    public class MemeBusiness
    {
        Database.MemeDatabase data = new Database.MemeDatabase();
        public List<Models.TbMemelation> consultar(bool maior)
        {
           List<Models.TbMemelation> ml = data.consultar(maior);
           
           if(ml == null)
                throw new ArgumentException("Nenhum registro encontrado");

            return ml;
        }

        public Models.TbMemelation inserir(Models.TbMemelation ml)
        {            
            if (string.IsNullOrEmpty(ml.NmAutor))
                throw new Exception("Nome é obrigatório.");
            if (string.IsNullOrEmpty(ml.DsCategoria))
                throw new Exception("Categoria é obrigatório.");
            if (string.IsNullOrEmpty(ml.DsHashtags))
                throw new Exception("Hashtag " + ml.DsHashtags + " é obrigatório.");
                
            return data.inserir(ml);
        }

        public Models.TbMemelation deletar(int id)
        {
            Models.TbMemelation meme = data.consultarPorID(id);
            if(meme == null)
                throw new ArgumentException("ID não existe");

            return data.deletar(meme);
        }

        public int curtidas(int id)
        {
            Models.TbMemelation curt = data.consultarPorID(id);
            if(curt == null)
                throw new ArgumentException("ID não existe");

          return data.curtidas(curt);
        }

        public Models.TbMemelation alterar (int id, Models.TbMemelation alt)
        {            
            if (string.IsNullOrEmpty(alt.NmAutor))
                throw new Exception("Nome é obrigatório.");
            if (string.IsNullOrEmpty(alt.DsCategoria))
                throw new Exception("Categoria é obrigatório.");
            if (string.IsNullOrEmpty(alt.DsHashtags))
                throw new Exception("Hashtag " + alt.DsHashtags + " é obrigatório.");

            return data.alterar(id,alt);
        }
    }
}