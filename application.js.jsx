/** @jsx React.DOM */

var DasList = React.createClass({

  getInitialState: function() {
    return { dasItems: [], newItem: "" }
  },

  renderDasItems: function() {
    var dasItems = this.state.dasItems
    if (dasItems.length) {
      return _.map(this.state.dasItems, function(item) {
        return (<li>{ item }</li>)
      })
    } else {
      return "No Items In Das List!"
    }
  },

  onNewItemChange: function(event) {
    var newItem = event.target.value
    this.setState({newItem: newItem})
  },

  onNewItemSubmit: function(event) {
    if (event.keyCode !== 13) return
    var dasItems = this.state.dasItems
    dasItems = dasItems.concat(this.state.newItem)
    this.setState({dasItems: dasItems, newItem: ""})
  },

  render: function() {
    var title = this.props.title
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2 page-header">
          <h2>{ title }</h2>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <ul>
              { this.renderDasItems() }
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <label htmlFor="new_item">Type Something and Hit Enter!</label>
            <input type="text" name="new_item"
                   value={this.state.newItem}
                   onChange={this.onNewItemChange}
                   onKeyDown={this.onNewItemSubmit}/>
          </div>
        </div>
      </div>
    )
  }
})

