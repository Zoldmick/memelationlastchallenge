using System;

namespace memelationlastchallenge.Models.Request
{
    public class MemeAltResponse
    {
        public string autor { get; set; }
        public string categoria { get; set; }
        public string hashtags { get; set; }
        public bool maior { get; set; }
        public string imagem { get; set; }
    }
}