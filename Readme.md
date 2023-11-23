# Utilitario de productor de eventos en Kafka

### Uso

1. Instalar las dependencias.  
`yarn install`

2. Crear una carpeta llamada *events* en la raiz del proyecto. En esta se deberan de colocar los eventos que se enviaran a Apache Kafka en formato JSON.

    > |- src  
      &nbsp;&nbsp;&nbsp;&nbsp;...   
      |- events  
      &nbsp;&nbsp;&nbsp;&nbsp;|- on-boarding.json  
      &nbsp;&nbsp;&nbsp;&nbsp;|- register.json   
      &nbsp;&nbsp;&nbsp;&nbsp;|- event-name.json    
      &nbsp;&nbsp;&nbsp;&nbsp;...

3. Invocar al script con el siguiente comando.  
`yarn run start <topic-name> <event-name>`  

    Ejemplo:  
`yarn run start pe.io.onboarding.completed.v1 on-boarding`