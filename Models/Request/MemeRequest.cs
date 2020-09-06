using Microsoft.AspNetCore.Http;

namespace memelationlastchallenge.Models.Request
{
    public class MemeRequest
    {
        public string autor { get; set; }
        public string categoria { get; set; }
        public string hashtags { get; set; }
        public bool maior { get; set; }
        public IFormFile imagem { get; set; }
    }
}