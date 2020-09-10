using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace memelationlastchallenge.Models
{
    [Table("tb_memelation")]
    public partial class TbMemelation
    {
        public TbMemelation()
        {
            TbComentario = new HashSet<TbComentario>();
        }

        [Key]
        [Column("id_meme", TypeName = "int(11)")]
        public int IdMeme { get; set; }
        [Required]
        [Column("nm_autor", TypeName = "varchar(100)")]
        public string NmAutor { get; set; }
        [Required]
        [Column("ds_categoria", TypeName = "varchar(255)")]
        public string DsCategoria { get; set; }
        [Required]
        [Column("ds_hashtags", TypeName = "varchar(255)")]
        public string DsHashtags { get; set; }
        [Column("bt_maior")]
        public bool BtMaior { get; set; }
        [Required]
        [Column("ds_imagem", TypeName = "varchar(255)")]
        public string DsImagem { get; set; }
        [Column("qtd_curtidas", TypeName = "int(11)")]
        public int QtdCurtidas { get; set; }
        [Column("dt_inclusao", TypeName = "date")]
        public DateTime? DtInclusao { get; set; }

        [InverseProperty("IdMemeNavigation")]
        public virtual ICollection<TbComentario> TbComentario { get; set; }
    }
}
