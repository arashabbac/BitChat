using BitChat.Infrastructure.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BitChat.Infrastructure.Persistence.Configuration
{
    internal class MessageConfiguration : IEntityTypeConfiguration<Message>
    {
        public void Configure(EntityTypeBuilder<Message> builder)
        {
            builder.Property(c => c.MessageText)
                .HasMaxLength(3000);

            builder.HasOne(c=> c.Chat)
                .WithMany(o=> o.Messages)
                .HasForeignKey(c => c.ChatId)
                .OnDelete(DeleteBehavior.Restrict);
    }
    }
}
