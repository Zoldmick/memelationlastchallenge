using System;
using System.IO;
using System.Collections;
using Microsoft.AspNetCore.Http;

namespace memelationlastchallenge.Business
{
    public class GerenciadorFoto
    {
        public string GerarNovoNome(string nome)
        {
            string NovoNome = Guid.NewGuid().ToString();
            return NovoNome + Path.GetExtension(nome);
        }

        public byte[] LerFoto(string nome)
        {
            string caminho = Path.Combine(AppContext.BaseDirectory,"Storage","Fotos", nome);
            return File.ReadAllBytes(caminho);
        }

        public void SalvarFoto(string nome, IFormFile foto)
        {
            string caminho = Path.Combine(AppContext.BaseDirectory,"Storage","Fotos",nome);
            using(FileStream fs = new FileStream(caminho,FileMode.Create))
            {
                foto.CopyTo(fs);
            }
        }
        public string GerarContentType(string nome)
        {
            string extensao = System.IO.Path.GetExtension(nome).Replace(".", "");
            string contentType = "image/" + extensao;//image/jpg
            return contentType;
        }

    }
}