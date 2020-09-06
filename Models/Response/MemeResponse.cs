using System;

namespace memelationlastchallenge.Models.Response
{
    public class MemeResponse
    {
        public int id { get; set; }
        public string autor { get; set; }
        public string categoria { get; set; }
        public string  hashtags { get; set; }
        public bool maior { get; set; }
        public string imagem { get; set; }

        public int curtidas { get; set; }
        public DateTime? inclusao { get; set; }
    }
}