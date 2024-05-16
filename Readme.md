# Utilitario de productor de eventos en Kafka

### Uso

1. Instalar las dependencias.  
`yarn install`

2. Crear una carpeta llamada *events* en la raiz del proyecto. En esta se deberan de colocar los eventos que se enviaran  junto al topic a Apache Kafka en formato JSON.

```json
{
  "topic": "topic-name",
  "data":{}
}
```
    > |- src  
          ...   
      |- events  
        |- on-boarding.json  
        |- register.json   
        |- event-name.json    
          ...

3. Invocar al script con el siguiente comando.  
`yarn run start  <event-name>`  

    Ejemplo:  
`yarn run start on-boarding`