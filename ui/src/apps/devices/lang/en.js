export default {
  oper: {
    createBtn: 'Create',
    finish: 'Finish',
    cancel: 'Cancel',
    save: 'Save',
    addSuccess: 'Add Success',
    createSuccess: 'Create Success',
    editSuccess: 'Edit Success',
    confirmDelete: 'Confirm Delete',
    deleteSuccess: 'Delete Success',
    deleteFail: 'Delete Fail',
    delete: 'Delete',
    edit: 'Edit',
    warning: 'Warning',
    select: 'Please Select',
    copy: 'Copy',
    copySuccess: 'Copy Success',
    download: 'Download',
    prev: 'Prev',
    next: 'Next',
  },
  devices: {
    device: 'Device',
    deviceInfo: 'Device Basic Information',
    loraInfo: 'loRa Information',
    deviceName: 'Device Name',
    deviceNameRequired: 'Device Name Required',
    deviceConsoleIP: 'Device Console IP Address',
    deviceConsoleUsername: 'Device Console Username',
    deviceConsolePort: 'Device Console Port',
    deviceType: 'Device Type',
    deviceTypeRequired: 'Device Type Required',
    deviceID: 'Device ID',
    deviceIDRequired: '8-36 characters, which can include numbers, letters, underscores',
    warning: 'If not, the system will generate 32 bits by default',
    productName: 'Product Name',
    productNameRequired: 'Product Name Required',
    groupName: 'Group Name Required',
    status: 'Status',
    blocked: 'Blocked',
    isTrue: 'Yes',
    isFalse: 'No',
    createAt: 'Create At',
    createUser: 'Creator',
    authInfo: 'Auth Info',
    or: 'or',
    createProduct: 'Create Product',
    manufacturer: 'Manufacturer',
    manufacturerRequired: 'Manufacturer Required',
    serialNumber: 'Serial Number',
    serialNumberRequired: 'Serial Number Required',
    softVersion: 'Software Version',
    softVersionRequired: 'Software Version Required',
    hardwareVersion: 'Hardware Version',
    hardwareVersionRequired: 'Hardware Version Required',
    description: 'Description',
    descriptionRequired: 'Description Required',
    locationSelect: 'Location Select',
    location: 'Location',
    locationRequired: 'Location Required',
    longitude: 'Longitude',
    longitudeIsNumber: 'Longitude is a number',
    latitude: 'Latitude',
    latitudeIsNumber: 'latitude is a number',
    locationValidate: 'Please enter the correct format.',
    nextStep: 'Next Step',
    backStep: 'Previous',
    authType: 'Auth Type',
    authTypeRequired: 'Auth Type Required',
    autoCreateCerts: 'Auto Create Certs',
    autoCreateCertsRequired: 'Auto Create Certs Required',
    autoCreatePopover: 'If you choose Yes, a certificate is automatically created and bound to the device',
    username: 'User Name',
    usernameWarnig: 'If not, it will be consistent with the device number',
    token: 'Token',
    filedLength: 'The field length must be between 8 and 36 characters',
    statusLabel: 'Status',
    connectedAt: 'Connected At',
    clientIP: 'Client IP',
    keepAlive: 'Keep Alive',
    baseInfo: 'Basic Information',
    runLog: 'Runing Log',
    event: 'Event',
    createAtLog: 'Create At Log',
    deviceCode: 'Device Code',
    mqttWarning: 'When the device is connected to the MQTT server, client_id is the device ID',
    mqtt: 'MQTT Server',
    mqttssBroker: 'Cert',
    CoAP: 'CoAP Server',
    coapssBroker: 'Cert',
    proxy: 'Proxy subscription',
    proxyInfo1: 'The proxy subscription refers to: After the device is connected successfully, the server automatically subscribes the device to subscribe to certain topics, and the device does not need to perform the subscription operation again.',
    proxyInfo2: 'In the initial situation, the system has already subscribed to the device theme and grouping theme for the device by default, and device developers do not need to care about the theme.',
    proxyInfo3: 'When the control terminal calls the API, it only needs to specify the device or group. The device listens to the received message and parses the payload to perform the corresponding operation.',
    proxyInfo4: 'When the device needs to distinguish messages by "Topic", the platform also supports user-defined proxy-subscribed topics (up to 10 topics).',
    proxyInfoWarning: 'Agents subscribe to devices that are not suitable for the CoAP protocol.',
    addSubscibe: 'Add Subscibe',
    topic: 'Topic',
    topicRequired: 'Topic Required',
    addTopic: 'Add Topics',
    addTopicSuccess: 'Add Topic Success',
    bindCerts: 'Bind Certs',
    addCert: 'Add Certs',
    certName: 'Cert Name',
    enable: 'Enable',
    certInfo: 'Enter certs name search',
    createCert: 'Create Certs',
    certNotNull: 'The selected Certs can not be empty',
    policy: 'Policy Details',
    bindPolicies: 'Bind Policies',
    addPolicie: 'Add Policies',
    policieName: 'Policies Name',
    accessLabel: 'Access',
    allowLabel: 'Allow',
    policieInfo: 'Enter policies name search',
    createPolicie: 'Create Policies',
    policieNotNull: 'The selected policie can not be empty',
    payload: 'Payload',
    addInstruction: 'Add Instruction',
    publishStatusLabel: 'Publish Status',
    publishStatusContent: 'Publish Content',
    publishTopic: 'Publish Topic',
    publishCreateAt: 'Publish Create At',
    publishInstruct: 'Publish Instruct',
    publishTask: 'Publish Task',
    instructWarning1: 'Instruction content must be in JSON format',
    instructWarning2: 'Default to device topic',
    needAck: 'Need Ack',
    isNeedAck: 'Is Need Ack',
    intervalType: 'Interval Type',
    needNotAck: 'Need Not Ack',
    softwarePackage: 'Software Package',
    softwarePackageRequired: 'Software Package Required',
    publishSuccess: 'Publish Success',
    taskSuccess: 'Add Task Scuccess',
    instructError: 'Add Instruct Fail',
    taskName: 'Schedule Name',
    taskNameRequired: 'Schedule Name Required',
    timeType: 'Publish',
    publishTime: 'Publish Time',
    publishTimeRequired: 'Publish Time Required',
    dateTimePlaceholder: 'Please select date - time.',
    repeatType: 'Repeat',
    timeNow: 'At Once',
    timeNoRepeat: 'Timing (Not repeated)',
    timeRepeat: 'Timing（repeat)',
    hour: 'Hour',
    everyHour: 'Every Hour',
    everyDay: 'Every Day',
    minutes: 'Minutes',
    minutesRules: 'The range is 1-59 minutes.',
    hourRequired: 'Please input 1-59 minutes per hour',
    day: 'Day',
    dayRequired: 'Please select 00:01 to 23:59 each day.',
    week: 'Week',
    weekRequired: 'Please select a week',
    weekTimeRequired: 'Please select time',
    Monday: 'Monday',
    Tuesday: 'Tuesday',
    Wednesday: 'Wednesday',
    Thursday: 'Thursday',
    Friday: 'Friday',
    Saturday: 'Saturday',
    Sunday: 'Sunday',
    instructRecords: 'Instructs Records',
    intervalTask: 'Interval Task',
    platformInstruct: 'Platform Instruct',
    customInstruct: 'Custom Instruct',
    updateInstruct: 'Update Instruct',
    objectName: 'Object Name',
    instanceCount: 'Instance Count',
    itemCount: 'Item Count',
    autoSubscibe: 'Auto Subscibe',
    devicesItems: 'Items',
    itemName: 'Item Name',
    itemType: 'Item Type',
    itemUnit: 'Item Unit',
    itemOperations: 'Item Operation',
    itemValue: 'Item Value',
    value: 'Value',
    valueRequired: 'Value Required',
    read: 'Read',
    write: 'Write',
    execute: 'Execute',
    autoSubSccuess: 'Auto Subscribe Success',
    autoSubCancel: 'Unsubscribe Success',
    readSuccess: 'Read Success',
    writeSuccess: 'Write Success',
    executeSucceess: 'Execute Success',
    carrier: 'carrier',
    physicalNetwork: 'Physical Network',
    tagName: 'tag',
  },
  groups: {
    group: 'Group',
    groupName: 'Group Name',
    groupNameRequired: 'Group Name Required',
    groupID: 'Group ID',
    groupInfo: 'Group Info',
    groupIDRequired: 'Group ID required',
    deviceNum: 'Device Number',
    productName: 'Product Name',
    productIDRequired: 'Product Name Required',
    description: 'Description',
    descriptionRequired: 'Description Required',
    createUser: 'Creator',
    createAt: 'Create At',
    deviceControl: 'Devices Control',
    addInstruction: 'Add Instruction',
    publishSuccess: 'Publish success',
    publishFailure: 'Publish failure',
    publishTimeout: 'Publish timeout',
  },
  products: {
    product: 'Product',
    createProduct: 'Create Product',
    bindDevices: 'Bind Devices',
    productInfo: 'Product Info',
    productName: 'Product Name',
    productNameRequired: 'Product Name Required',
    deviceNum: 'Device',
    dataPoints: 'Data Points',
    item: 'Items',
    dataStreams: 'Data Streams',
    application: 'Application',
    description: 'Description',
    productDescription: 'Product Description',
    descriptionRequired: 'Description Required',
    productID: 'Product ID',
    createUser: 'Creator',
    createAt: 'Create At',
    cloudProtocol: 'Cloud Protocol',
    cloudProtocolRequired: 'Cloud Cloud Required',
  },
  certs: {
    name: 'Name',
    createUser: 'Creator',
    createAt: 'Create At',
    enable: 'Enable',
    allowed: 'Allowed',
    notAllowed: 'Not Allowed',
    isTrue: 'Yes',
    isFalse: 'No',
    isCreate: 'Create Cert',
    isCreated: 'Create Cert Success',
    nameRequired: 'Name Required',
    enableRequired: 'Enable Required',
    certTips: 'The certificate can be bound to the device, and the authentication mode of the corresponding device must be set to certificate authentication.',
    cert: 'Devices Cert',
    key: 'Devices Key',
    root: 'Actorcloud Root CA',
    download: 'Donwlaod',
    downloadCert: 'Download Cert',
    bindDevices: 'Bind Devices',
    addDevices: 'Add Devices',
    deviceName: 'Device Name',
    deviceType: 'Device Type',
    deviceID: 'Device ID',
    productName: 'Product Name',
    groupName: 'Group Name',
    notNull: 'The selected device can not be empty',
  },
  policies: {
    name: 'Name',
    nameRequired: 'Name Required',
    topic: 'Topic',
    topicRequired: 'Topic Required',
    accessLabel: 'Access',
    accessRequired: 'Access Required',
    allowLabel: 'Allow',
    allowRequired: 'Allow Required',
    createAt: 'Create At',
    policie: 'Policie',
    createUser: 'Creator',
    description: 'Description',
    descriptionRequired: 'Description Requried',
    bindDevices: 'Bind Devices',
    includeDevices: 'Include Devices',
    addDevices: 'Add Devices',
    deviceName: 'Device Name',
    deviceType: 'Device Type',
    deviceID: 'Device ID',
    productName: 'Product Name',
    groupName: 'Group Name',
    notNull: 'The selected device can not be empty',
  },
  map: {
    groupName: 'groupName',
  },
  deviceLogs: {
    deviceName: 'Device Name',
    deviceID: 'Client ID',
    IP: 'Client IP',
    deviceStatusLabel: 'Event',
    createAt: 'Create At',
    instruct: 'Instruct',
    payload: 'Payload',
    publishStatusLabel: 'Instruction Status',
    controlCreateAt: 'Control Create At',
    eventCreateAt: 'Event Create At',
    topic: 'Topic',
  },
}
