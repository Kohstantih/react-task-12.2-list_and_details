import { List, Spin } from "antd";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getServicesList } from "../../redux/actions/actionsCreator";
import { changeActiveStatus } from "../../redux/reducers/isActiveDetailsSlice";

import ErrorWidget from "../ErrorWidget/ErrorWidget";

export default function ListServices() {
    const { list, isLoading, error } = useAppSelector((state) => state.services);
    const { isActive } = useAppSelector(state => state.activeStatus)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getServicesList());
        isActive && dispatch(changeActiveStatus());
    }, [dispatch, isActive])

    return(
        <>  
            {error && 
            <ErrorWidget message={error} onClick={() => dispatch(getServicesList())} />}
            {isLoading && <Spin tip="Loading..." size="large"><div className="content" /></Spin>}
            {list.length !== 0 && <List
                header={<h2>Список услуг</h2>}
                dataSource={list}
                renderItem={(item) => (
                    <Link to={`./${item.id}/details`} onClick={() => {dispatch(changeActiveStatus())}} >
                        <List.Item>
                            <List.Item.Meta
                            title={item.name}
                            description={<p>Цена: <span style={{fontWeight: 'bold'}}>{item.price}</span></p>}
                            />
                        </List.Item>
                    </Link>
                )}
            />}
        </>        
    )
}