using BitChat.Infrastructure.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BitChat.Infrastructure.Persistence.Configuration
{
    internal class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.Property(c=> c.ApplicationName)
                .HasMaxLength(200)
                .IsRequired();

            builder.Property(c => c.AppUserId)
                .IsRequired();

            builder.HasMany(c=> c.Chats)
                .WithOne(o=> o.ToUser)
                .HasForeignKey(o => o.ToUserId)
                .OnDelete(DeleteBehavior.Restrict);

        }
    }
}
