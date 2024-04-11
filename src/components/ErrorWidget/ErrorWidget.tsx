import { Button, Flex } from "antd";
import { TErrorWidgetProps } from "../../types/TErrorWidgetProps";

export default function ErrorWidget({ message, onClick }: TErrorWidgetProps) {
    return (
        <Flex
            vertical={true}
            style={{
                border: '1px solid red',
                backgroundColor: '#FAD1C8',
                padding: '10px'
            }}
        >
            <p>Произошла ошибка: <span>{message}</span></p>
            <Button
                onClick={onClick}
                type="primary"
            >Повторить запрос</Button>
        </Flex>
    )
}