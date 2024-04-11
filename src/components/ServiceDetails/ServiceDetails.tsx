import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { RollbackOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Spin } from "antd";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getServiceDetails } from "../../redux/actions/actionsCreator";
import { activeServiceReset } from "../../redux/reducers/activeServiceSlice";
import { changeActiveStatus } from "../../redux/reducers/isActiveDetailsSlice";

import ErrorWidget from "../ErrorWidget/ErrorWidget";

export default function ServiceDetails() {
    const { id } = useParams();
    const { service, isLoading, error } = useAppSelector((state) => state.activeService);
    const dispatch = useAppDispatch();

    useEffect(() => {
        id && dispatch(getServiceDetails(id))
    }, [dispatch, id])

    return (
        <> 
            {error && id &&
            <ErrorWidget message={error} onClick={() => dispatch(getServiceDetails(id))} />}
            {isLoading &&
            <Flex style={{ height: '100px'}}>
                <Spin tip="Loading..." size="large"><div className="content" /></Spin>
            </Flex>}
            {service && <Card
                title={service.name}
            >
                <p>Цена: <span style={{fontWeight: 'bold'}}>{service.price}</span></p>
                <p><span style={{fontWeight: 'bold'}}>{service.content}</span></p>
            </Card>}
            <Link style={{marginTop: '150px'}} to='/' onClick={() => {
                dispatch(changeActiveStatus());
                dispatch(activeServiceReset());
                }} >
                <Button type='primary' icon={<RollbackOutlined />}>На главную</Button>
            </Link>
        </>
        
    )
}