output "kube_admin_config" {
  value = azurerm_kubernetes_cluster.demo.kube_admin_config_raw
}

output "storage_account" {
  value = azurerm_storage_account.demo.name
}

output "storage_key" {
  value = azurerm_storage_account.demo.primary_access_key
}

output "servicebus_connection" {
  value = azurerm_servicebus_namespace_authorization_rule.demo.primary_connection_string
}

output "eventhub_connection" {
  value = azurerm_eventhub_authorization_rule.demo.primary_connection_string
}

output "cosmosdb_key" {
  value = azurerm_cosmosdb_account.demo.primary_master_key
}

output "cosmosdb_url" {
  value = azurerm_cosmosdb_account.demo.endpoint
}