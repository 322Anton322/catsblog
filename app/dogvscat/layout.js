export default function Layout(props) {
    return (
      <>
        {props.children}
        <div>
            {props.cat}
            {props.dog}
        </div>
        
      </>
    )
  }