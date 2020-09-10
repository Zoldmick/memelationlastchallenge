namespace memelationlastchallenge.Models.Response
{
    public class ErroResponse
    {
        public ErroResponse(int cod, string txt)
        {
            this.codigo = cod;
            this.erro = txt;
        }
        public int codigo { get; set; }
        public string erro { get; set; }
    }
}