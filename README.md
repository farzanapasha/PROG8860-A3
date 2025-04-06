```
az login
az group create --name MyResourceGroup --location eastus
az storage account create --name mystoragefunc --location eastus --resource-group MyResourceGroup --sku Standard_LRS
az functionapp create --resource-group MyResourceGroup --consumption-plan-location eastus --runtime node --functions-version 4 --name MyFuncAppFarzana --storage-account mystoragefunc
```
Test
```
npm test
```
Deploy
```
func azure functionapp publish MyFuncAppFarzana
```
Run locally
```
func start
```
