using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Collections;
using Microsoft.EntityFrameworkCore;

namespace memelationlastchallenge.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MemeController: ControllerBase
    {
        Utils.MemeConversor conv = new Utils.MemeConversor();

        Business.GerenciadorFoto gerenciadorFoto = new Business.GerenciadorFoto();
        Business.MemeBusiness buss = new Business.MemeBusiness();

        [HttpPost]
        public ActionResult<Models.Response.MemeResponse> Inserir([FromForm] Models.Request.MemeRequest req)
        {
            try
            {
                Models.TbMemelation ml = conv.ForTable(req);
                ml.DsImagem = gerenciadorFoto.GerarNovoNome(req.imagem.FileName);

                ml = buss.inserir(ml);
                gerenciadorFoto.SalvarFoto(ml.DsImagem,req.imagem);

                return conv.ForResponse(ml);
            }
            catch(Exception ex)
            {
                return new BadRequestObjectResult(
                    new Models.Response.ErroResponse(400,ex.Message)
                );
            }
        }

        [HttpGet]
        public ActionResult<List<Models.Response.MemeComentarioResponse>> consultar(bool maior)
        {
            try
            {
               List<Models.TbMemelation> ml = buss.consultar(maior);
               return conv.ForListaMemeComentario(ml);

            }
            catch (Exception ex) 
            {
                return new BadRequestObjectResult(
                    new Models.Response.ErroResponse(500,ex.Message)
                );
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<Models.Response.MemeResponse> deletar(int id)
        {
            try
            {
                return conv.ForResponse(buss.deletar(id));
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult(
                    new Models.Response.ErroResponse(404,ex.Message)
                );
            }
        } 

        [HttpPost("Curtida/{id}")]
        public ActionResult<int> curtidas(int id)
        {
            try
            {
                return buss.curtidas(id); 
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult(
                    new Models.Response.ErroResponse(404,ex.Message)
                );
            }
        }

        [HttpGet("Foto/{nome}")]
        public ActionResult buscarfoto(string nome)
        {
            try
            {
                
                byte[] foto = gerenciadorFoto.LerFoto(nome);
                return File(foto,gerenciadorFoto.GerarContentType(nome));
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult(
                    new Models.Response.ErroResponse(500,ex.Message)
                );
            }
        }
        [HttpPut("AltFoto/{id}")]
        public ActionResult<Models.Response.MemeResponse> alterar(int id, [FromForm] Models.Request.MemeRequest req)
        {
            try
            {
                Models.TbMemelation meme = conv.ForTable(req);
                meme.DsImagem = gerenciadorFoto.GerarNovoNome(req.imagem.FileName);
                meme = buss.alterar(id,meme);
                gerenciadorFoto.SalvarFoto(meme.DsImagem,req.imagem);

                return conv.ForResponse(meme);

            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult(
                    new Models.Response.ErroResponse(400,ex.Message)
                );
            }
        }

        [HttpPut("{id}")]
        public ActionResult<Models.Response.MemeResponse> alterar(int id, Models.Request.MemeAltResponse req)
        {
            try
            {
                Models.TbMemelation meme = conv.ForTableAlt(req);
                meme = buss.alterar(id,meme);

                return conv.ForResponse(meme);

            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult(
                    new Models.Response.ErroResponse(400,ex.Message)
                );
            }
        }
    }
}