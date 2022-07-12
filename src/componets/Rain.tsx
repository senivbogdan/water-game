import "../App.css"

const Rain = ({ id, style } : { id: any, style: any }) => {
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