namespace BitChat.Infrastructure.Domain
{
    public class Message
    {
        public long Id { get; set; }
        public string MessageText { get; set; }
        public bool IsMedia { get; set; }
        public bool IsRead { get; set; }
        public DateTime InsertDateTime { get; set; }
        public long ChatId { get; set; }

        public virtual Chat Chat { get; set; }
    }
}
