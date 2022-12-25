using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace MusicalOnlineService.Models
{
    public partial class MusicalOnlineServiceContext : DbContext
    {
        public MusicalOnlineServiceContext()
        {
        }

        public MusicalOnlineServiceContext(DbContextOptions<MusicalOnlineServiceContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Album> Albums { get; set; }
        public virtual DbSet<Performer> Performers { get; set; }
        public virtual DbSet<Track> Tracks { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=localhost;Database=MusicalOnlineService;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Cyrillic_General_CI_AS");

            modelBuilder.Entity<Album>(entity =>
            {
                entity.ToTable("Album");

                entity.Property(e => e.Id)
                    .HasMaxLength(200)
                    .HasColumnName("ID");

                entity.Property(e => e.PerformerId)
                    .IsRequired()
                    .HasMaxLength(200)
                    .HasColumnName("PerformerID");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Genres)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.PerformerName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.HasOne(d => d.Performer)
                    .WithMany(p => p.Albums)
                    .HasForeignKey(d => d.PerformerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Album_Performer");
            });

            modelBuilder.Entity<Performer>(entity =>
            {
                entity.ToTable("Performer");

                entity.Property(e => e.Id)
                    .HasMaxLength(200)
                    .HasColumnName("ID");

                entity.Property(e => e.Genres)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(200);
            });

            modelBuilder.Entity<Track>(entity =>
            {
                entity.ToTable("Track");

                entity.Property(e => e.Id)
                    .HasMaxLength(200)
                    .HasColumnName("ID");

                entity.Property(e => e.AlbumId)
                    .HasMaxLength(200)
                    .HasColumnName("AlbumID");

                entity.Property(e => e.Genres)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.PerformerId)
                    .IsRequired()
                    .HasMaxLength(200)
                    .HasColumnName("PerformerID");

                entity.Property(e => e.AlbumTitle)
                    .HasMaxLength(200)
                    .HasColumnName("AlbumTitle");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.PerformerName)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.HasOne(d => d.Album)
                    .WithMany(p => p.Tracks)
                    .HasForeignKey(d => d.AlbumId)
                    .HasConstraintName("FK_Track_Album");

                entity.HasOne(d => d.Performer)
                    .WithMany(p => p.Tracks)
                    .HasForeignKey(d => d.PerformerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Track_Performer");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
