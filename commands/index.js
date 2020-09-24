const handleBackupCommand = require('./handle_backup_command');
const handleBlocknotifyCommand = require('./handle_blocknotify_command');
const handleConnectCommand = require('./handle_connect_command');
const handleInvoiceCommand = require('./handle_invoice_command');
const handleLiquidityCommand = require('./handle_liquidity_command');
const handleMempoolCommand = require('./handle_mempool_command');
const handlePayCommand = require('./handle_pay_command');

module.exports = {
  handleBackupCommand,
  handleBlocknotifyCommand,
  handleConnectCommand,
  handleInvoiceCommand,
  handleLiquidityCommand,
  handleMempoolCommand,
  handlePayCommand,
};
