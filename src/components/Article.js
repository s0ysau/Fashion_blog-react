export default function Article (props) {
  return (
    <div className='main'>
      <h4 className='date'>{props.date}</h4>
      <h2 className=''>{props.title}</h2>
      <img
        className=''
        src={props.img}
        alt={props.title}
      />
      <p className='post-body'>{props.post}</p>
      <p className='continue'>Continue ...</p>
    </div>
  )
}
