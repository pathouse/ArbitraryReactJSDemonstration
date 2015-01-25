/** @jsx React.DOM */

var DasInfoPanel = React.createClass({

  getColumnATotals: function () {
    var items = this.props.items
    var columnATotals = _.countBy(items, 'columnA')
    return _.map(_.keys(columnATotals), function (key) {
      return columnATotals[key] + " " + key + "(s)"
    })
  },

  getColumnBTotals: function () {
    var items = this.props.items
    var columnBTotal = _.reduce(_.pluck(items, 'columnB'), function(sum, item) {
      return parseFloat(sum) + parseFloat(item)
    })
    return "The number of OSTRICHES has maxed out at: " + columnBTotal
  },

  getColumnCTotals: function () {
    var items = this.props.items
    return _.reduce(_.pluck(items, 'columnC'), function(sum, item) {
      return sum + " " + item
    })
  },

  render: function() {
    var columnATotals = this.getColumnATotals()
    var columnBTotals = this.getColumnBTotals()
    var columnCTotals = this.getColumnCTotals()

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3> The Story So Far: </h3>
        </div>
        <div className="panel-body"></div>
        <ul className="list-group">
          <li className="list-group-item">
            { columnATotals }
          </li>
          <li className="list-group-item">
            { columnBTotals }
          </li>
          <li className="list-group-item">
            { columnCTotals }
          </li>
        </ul>
      </div>
    )
  }
})

var DasItem = React.createClass({

  onColumnChange: function(event) {
    var item = this.props.item
    item[event.target.name] = event.target.value
    this.props.onItemChange(item)
  },

  renderSelectOptions: function() {
    var options = ["PICK YOUR POISON", "Poltergeist", "Watermelon", "Pachycephalosaurus"]
    return _.map(options, function(option) {
      return (
        <option key={_.uniqueId("option")} value={option}>
          { option }
        </option>
      )
    }.bind(this))
  },

  render: function () {
    return (
      <div>
        <select name="columnA"
                value={this.props.item.columnA}
                onChange={this.onColumnChange}>
          { this.renderSelectOptions() }
        </select>
        <input type="text" name="columnB"
               value={this.props.item.columnB}
               onChange={this.onColumnChange}/>
        <input type="text" name="columnC"
               value={this.props.item.columnC}
               onChange={this.onColumnChange}/>
      </div>
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
        return (
          <li>
            <DasItem item={item} onItemChange={this.onItemChange} />
          </li>
        )
      }, this)
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

  onNewItemChange: function(item) {
    this.setState({newItem: item})
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
            <DasInfoPanel items={this.state.dasItems} />
           </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h3> Add a new row: </h3>
            <DasItem item={this.state.newItem} onItemChange={this.onNewItemChange} />
            <button className="btn btn-info" onClick={this.onNewItemSubmit}>Add Row</button>
          </div>
        </div>
      </div>
    )
  }
})





