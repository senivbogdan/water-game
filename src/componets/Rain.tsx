import "../App.css"

const Rain = ({  id, style} : { id: any, style: any }) => {
    console.log("style", style)
    return (
             <p
                 className={"rain"}
                 id={`item${id}`}
                 style={style}
             >
                 💧
      </p>

    );
};

export default Rain;