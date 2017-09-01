import React from "react";
 
class content extends React.Component {

    loadData() {
		fetch('example.com/api/orders/unsigned')
			.then(response => response.json())
			.then(data => {
				this.setState({data: data })
		})
			.catch(err => console.error(this.props.url, err.toString()))
	}

    render() {
        return( 
            <div id="btnDiv">
                <a href="/scrape" method="GET" id="scrapeBtn">Get New Articles</a>
                <div id="subbody">
                    <div id="articles"></div>
                    <div id='notes'>
                    </div>
                </div>   
            </div>    
        );
    }
}       