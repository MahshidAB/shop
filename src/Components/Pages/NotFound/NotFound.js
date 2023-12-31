import notFoundCss from "./notfound.module.css";

const NotFound = () => {
    return ( 
        <div className={notFoundCss.size}>
            <h1 className="text-center mt-5">کالای مورد نظر یافت نشد!</h1>
        </div>
     );
}
 
export default NotFound
