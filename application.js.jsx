/** @jsx React.DOM */
var DasItem = React.createClass({

  onColumnChange: function(event) {
    var item = this.props.item
    item[event.target.name] = event.target.value
    this.props.onItemChange(item)
  },

  render: function () {
    return (
      <li>
        <input type="text" name="columnA"
               value={this.props.item.columnA}
               onChange={this.onColumnChange}/>
        <input type="text" name="columnB"
               value={this.props.item.columnB}
               onChange={this.onColumnChange}/>
        <input type="text" name="columnC"
               value={this.props.item.columnC}
               onChange={this.onColumnChange}/>
      </li>
    )
  }
})


var DasList = React.createClass({

  getInitialState: function() {
    return { dasItems: [], newItem: {} }
  },

  renderDasItems: function() {
    var dasItems = this.state.dasItems
    if (dasItems.length) {
      return _.map(this.state.dasItems, function(item) {
        return (<DasItem item={item} onItemChange={this.onItemChange} />)
      })
    } else {
      return "No Items In Das List!"
    }
  },

  onItemChange: function(item) {
    var dasItems = this.state.dasItems
    var updatedIndex = _.indexOf(dasItems, _.find(dasItems, {id: item.id}))
    dasItems[updatedIndex] = item
    this.setState({dasItems: dasItems})
  },

  onNewItemChange: function(event) {
    var newItem = this.state.newItem
    newItem[event.target.name] = event.target.value
    this.setState({newItem: newItem})
  },

  onNewItemSubmit: function() {
    var newItem = this.state.newItem
    newItem.id = _.uniqueId()

    var dasItems = this.state.dasItems
    dasItems = dasItems.concat(newItem)

    this.setState({dasItems: dasItems, newItem: {} })
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
            <input type="text" name="columnA"
                   value={this.state.newItem.columnA}
                   onChange={this.onNewItemChange}/>
            <input type="text" name="columnB"
                   value={this.state.newItem.columnB}
                   onChange={this.onNewItemChange}/>
            <input type="text" name="columnC"
                   value={this.state.newItem.columnC}
                   onChange={this.onNewItemChange}/>
            <button className="btn btn-info" onClick={this.onNewItemSubmit}>Add Row</button>
          </div>
        </div>
      </div>
    )
  }
})





