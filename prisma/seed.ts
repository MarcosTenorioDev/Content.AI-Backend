import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function main() {
  await prisma.prompt.deleteMany();

  await prisma.prompt.create({
    data: {
      title: "Título YouTube",
      template: `Seu papel é gerar três títulos para um vídeo do YouTube.

Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar os títulos.
Abaixo você também receberá uma lista de títulos, use essa lista como referência para os títulos a serem gerados.

Os títulos devem ter no máximo 60 caracteres.
Os títulos devem ser chamativos e atrativos para maximizar os cliques.

Retorne APENAS os três títulos em formato de lista como no exemplo abaixo:
'''
- Título 1
- Título 2
- Título 3
'''

Transcrição:
'''
{transcription}
'''`.trim(),
    },
  });

  await prisma.prompt.create({
    data: {
      title: "Descrição YouTube",
      template:
        `Seu papel é gerar uma descrição sucinta para um vídeo do YouTube.
  
Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar a descrição.

A descrição deve possuir no máximo 80 palavras em primeira pessoa contendo os pontos principais do vídeo.

Use palavras chamativas e que cativam a atenção de quem está lendo.

Além disso, no final da descrição inclua uma lista de 3 até 10 hashtags em letra minúscula contendo palavras-chave do vídeo.

O retorno deve seguir o seguinte formato:
'''
Descrição.

#hashtag1 #hashtag2 #hashtag3 ...
'''

Transcrição:
'''
{transcription}
'''`.trim(),
    },
  });

  await prisma.prompt.create({
    data: {
      title: "Descrição TikTok",
      template:
        `Crie uma descrição envolvente para seu vídeo no TikTok.
  
  Use no máximo 50 caracteres para destacar o conteúdo principal do vídeo e chamar a atenção.
  
  Além disso, adicione até 3 emojis relacionados ao conteúdo para atrair mais visualizações.
  
  Ao final, inclua de 3 a 5 hashtags relevantes em letras minúsculas.
  
  O formato deve ser o seguinte:
  '''
  Descrição curta. 😊🎥
  
  #hashtag1 #hashtag2 #hashtag3
  '''
  `.trim(),
    },
  });
  

  await prisma.prompt.create({
    data: {
      title: "Descrição Instagram",
      template:
        `Crie uma descrição atraente para o seu post no Instagram.
  
  Utilize até 150 caracteres para transmitir a essência do conteúdo.
  
  Adicione emojis relacionados ao tema para tornar a descrição mais visualmente atraente.
  
  Ao final, inclua de 5 a 10 hashtags em letras minúsculas para aumentar a visibilidade do seu post.
  
  O formato deve seguir:
  '''
  Descrição interessante. 😍📸
  
  #hashtag1 #hashtag2 #hashtag3 #hashtag4 ...
  '''
  `.trim(),
    },
  });

  await prisma.prompt.create({
    data: {
      title: "Descrição LinkedIn",
      template:
        `Crie uma descrição envolvente e profissional para uma publicação no LinkedIn baseada na transcrição abaixo.
  
  Use até 300 palavras para destacar os pontos principais, insights e conclusões do vídeo.
  
  A descrição deve ser informativa e encorajar conexões a comentar e compartilhar suas próprias experiências.
  
  Inclua até 5 hashtags profissionais relevantes ao final.
  
  O formato deve ser:
  '''
  Descrição detalhada e profissional.
  
  #hashtag1 #hashtag2 #hashtag3 #hashtag4 #hashtag5
  '''
  
  Transcrição:
  '''
  {transcription}
  '''`.trim(),
    },
  });
  
  await prisma.prompt.create({
    data: {
      title: "Tweet do Twitter",
      template:
        `Crie um tweet cativante baseado na transcrição abaixo.
  
  Utilize no máximo 280 caracteres, incluindo hashtags e menções.
  
  O tweet deve ser informativo, instigante e engajar os seguidores a interagir com o post.
  
  Inclua de 2 a 5 hashtags relevantes e, se possível, uma menção a um usuário influente relacionado ao tema.
  
  O formato deve seguir:
  '''
  Texto do tweet. @usuarioInfluente
  
  #hashtag1 #hashtag2 #hashtag3 #hashtag4 #hashtag5
  '''
  
  Transcrição:
  '''
  {transcription}
  '''`.trim(),
    },
  });
  

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
