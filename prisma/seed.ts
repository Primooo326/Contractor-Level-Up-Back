import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const templates=[
    { description:"Hola {{contact.first_name}}, aca esta su reporte BOI y su compañía esta 100% registrada!\n\nCualquier duda que tengas nos deje saber."},
    { description:"{{contact.first_name}}, tenemos buenas noticias! Su EIN fue emitido! Lo enviaremos por correo electrónico y también aquí en la conversación para su referencia.\n\n¿Qué sigue? El último paso es presentar su informe BOI, lo que haremos ahora que tenemos su EIN."},
    { description:"{{contact.first_name}}, ¡felicitaciones!\n\nAcabamos de recibir sus Artículos de Incorporación de su estado. También se los enviaremos por correo electrónico para que los mantenga en sus registros.\n\n¿Qué pasa ahora? Ahora comenzaremos el proceso para emitir su EIN para su nueva empresa. El EIN es lo que necesita para abrir una nueva cuenta bancaria para su empresa y comenzar a generar crédito.\n\nEl proceso demora algunas semanas y lo mantendremos informado tan pronto como recibamos la confirmación."},
    { description:"{{contact.first_name}}, hemos recibido su formulario para registrar su nueva empresa.\n\nAntes de enviarlo oficialmente a su estado para el registro, necesitamos que se asegure de que toda la información sea 100% correcta. No debe tener errores ortográficos, la dirección debe incluir el apartamento si lo tiene y etc.\n\nEsta información se utilizará para crear su empresa y debe ser 100% correcta. ¿Puede verificar su formulario y hacernos saber si todo está correcto o si necesita algún cambio?\n\nGracias."},
    { description:"Buenas tardes, {{contact.first_name}}\n\nTu perfil en Google My Business ya está creado, pero esto no significa que esté activo en Google todavía. Google lo revisará y lo confirmará en 1 a 4 días hábiles.\n\nA continuación, se muestra una captura de pantalla de tu perfil en revisión.\n\nEnlace para acceder: https://www.google.com/intl/en_us/business/\nCorreo electrónico para iniciar sesión: {{contact.custom_email}}\nContraseña para iniciar sesión: 1122ttQQ@"},
    { description:"Hola {{contact.first_name}}, acabamos de enviarle a su correo {{contact.email}}  la solicitud de EIN que debe firmar para que podamos enviarla y obtener su EIN.\n\nEl EIN es el número que necesitará para abrir una nueva cuenta bancaria y comenzar a generar crédito para su negocio. Solo podemos enviarla una vez que hayas firmado, por lo que si no lo firmas, no podremos enviarla. Se necesitan 10 segundos para firmarla."},
    { description:"Para ahorrar su tiempo, todo lo que necesitas saber esta en este video de 3 minutos donde explicaremos cómo funciona y el precio. Estoy aquí para responder cualquier pregunta sobre el video. Aquí está el video: https://contractorlevelup.com/llc"},
    { description:"https://bit.ly/clubbbreview"},
    { description:"Hola {{contact.first_name}}, soy {{user.first_name}} de Paint Biz Scale. ¡Quería enviarte este mensaje para recordarte realizar el pago el día de hoy como lo prometiste!\n\nAquí está el enlace que puedes usar para pagar: {{contact.stripe_failed_invoice_link}}"},
    { description:"Hola {{contact.first_name}}, soy {{user.first_name}} de Paint Biz Scale.\nTe envío este mensaje como recordatorio de tu promesa de pagar mañana, tal como acordamos. Por favor, confirma que podrás realizar el pago como fue prometido.\n\nAquí está el enlace que puedes usar para pagar: {{contact.stripe_failed_invoice_link}}"},
    { description:"{{user.name}} -  {{user.twilio_phone_number}} - Paint Biz Scale"},
    { description:"Hola {{contact.first_name}}, creamos estos logotipos para ti. ¿Puedes decirnos cuál te gusta?"},
    { description:"Hola {{contact.first_name}}, trabajo en el departamento de sitios web de Paint Biz Scale. ¿Puedes enviarme tu logotipo? Estoy trabajando en su sitio web en este momento."},
    { description:"Contraseña: {{contact.custom_email_password}}"},
    { description:"Email: {{contact.custom_email}}"},
    { description:"https://www.loom.com/share/febb543f6547454b924a65d6ef37115f"},
]

async function main() {
    await prisma.template.createMany({
        data: templates, 
    });

    console.log('Templates added!');
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });