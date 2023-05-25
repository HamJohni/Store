import s from './Regis.module.scss'
import Form from "@/components/Form/Form";

const Regis = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <Form/>
            </div>
        </div>
    );
};

export default Regis;
