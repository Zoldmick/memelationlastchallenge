using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace memelationlastchallenge.Models
{
    public partial class memelationContext : DbContext
    {
        public memelationContext()
        {
        }

        public memelationContext(DbContextOptions<memelationContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TbComentario> TbComentario { get; set; }
        public virtual DbSet<TbMemelation> TbMemelation { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("server=localhost;userid=root;password=1234;database=memelation", x => x.ServerVersion("8.0.21-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TbComentario>(entity =>
            {
                entity.HasKey(e => e.IdComentario)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdMeme)
                    .HasName("id_meme");

                entity.Property(e => e.DsComentario)
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.HasOne(d => d.IdMemeNavigation)
                    .WithMany(p => p.TbComentario)
                    .HasForeignKey(d => d.IdMeme)
                    .HasConstraintName("tb_comentario_ibfk_1");
            });

            modelBuilder.Entity<TbMemelation>(entity =>
            {
                entity.HasKey(e => e.IdMeme)
                    .HasName("PRIMARY");

                entity.Property(e => e.DsCategoria)
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DsHashtags)
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DsImagem)
                    .HasDefaultValueSql("'user.jpg'")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.NmAutor)
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
