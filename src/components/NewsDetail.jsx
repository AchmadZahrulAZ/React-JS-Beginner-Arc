export default function NewsDetail({ detail }) {
  return (
    <div>
        <h1>{detail.title}</h1>
        <div>
            {
                detail.content.map((item, index) => (
                    item.startsWith("http") ? (
                        <img key={index} src={item} alt="image" />
                    ) : (
                        <p key={index}>{item}</p>
                    )
                ))
            }
        </div>
    </div>
  )
}
