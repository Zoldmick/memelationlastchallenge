using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace memelationlastchallenge.Models
{
    [Table("tb_comentario")]
    public partial class TbComentario
    {
        [Key]
        [Column("id_comentario", TypeName = "int(11)")]
        public int IdComentario { get; set; }
        [Column("id_meme", TypeName = "int(11)")]
        public int IdMeme { get; set; }
        [Required]
        [Column("ds_comentario", TypeName = "varchar(255)")]
        public string DsComentario { get; set; }

        [ForeignKey(nameof(IdMeme))]
        [InverseProperty(nameof(TbMemelation.TbComentario))]
        public virtual TbMemelation IdMemeNavigation { get; set; }
    }
}
