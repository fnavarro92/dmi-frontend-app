import { FunctionComponent } from "react"
import { Show } from "../../models/Show";
import { getShowFromStore } from '../../redux/reducers/showReducer';
import { connect } from "react-redux";
import React from "react";

export interface ShowItemProps {
    show: Show
}

const ShowItem: FunctionComponent<ShowItemProps> = (showItemProps) => {

    const { show } = showItemProps;

    React.useEffect(() => {
        console.log("ASDF");
        console.log(show);
    }, []);
    
    
    return (
        <p>
            {show.name}
            {show.description}
        </p>        
    )

}

const mapStateToProps = (state: any) => {
    return {
        show: getShowFromStore(state)
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowItem);