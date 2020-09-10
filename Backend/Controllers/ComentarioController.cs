using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Collections;
using Microsoft.EntityFrameworkCore;

namespace memelationlastchallenge.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ComentarioController : ControllerBase
    {
        Utils.ComentarioConversor conv = new Utils.ComentarioConversor();
        Business.ComentarioBusiness buss = new Business.ComentarioBusiness();

        [HttpPost]
        public ActionResult<Models.Response.ComentarioResponse> inserir(Models.Request.ComentarioRequest req)
        {
            try{
                Models.TbComentario coment =  conv.ForTable(req);
                Models.TbComentario coment2 = buss.inserir(coment);
                return conv.ForResponse(coment2);
            }
            catch(Exception ex)
            {
                return new BadRequestObjectResult(
                    new Models.Response.ErroResponse(404,ex.Message)
                );
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<Models.Response.ComentarioResponse> deletar(int id)
        {
            try{
                Models.TbComentario coment = buss.deletar(id);
                return conv.ForResponse(coment);
            }
            catch(Exception ex)
            {
                return new BadRequestObjectResult(
                    new Models.Response.ErroResponse(404,ex.Message)
                );
            }
        }
    }
}