
export class Impressao {
  
    constructor(dadosParaImpressao) {
      this.dadosParaImpressao = dadosParaImpressao;
    }  
    
    async PreparaDocumento() {
      const corpoDocumento = this.CriaCorpoDocumento();
      const documento = this.GerarDocumento(corpoDocumento);
      return documento;
    }
  
    CriaCorpoDocumento() {

      const header1 = [
        { text: 'DADOS DO CONTRIBUINTE', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
        { text: 'NOME:', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
        { text: 'CPF:', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
      ];

      const header = [
        { text: 'DESCRIÇÃO', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
        { text: 'VALOR', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
        { text: 'DATA', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
      ];

      const body = this.dadosParaImpressao.map((prod) => {
        return [
          { text: prod.descricao, fontSize: 8 },
          { text: prod.valor, fontSize: 8 },
          { text: prod.date, fontSize: 8 },
        ];
      });
  
      const lineHeader = [
        {
          text:
            '______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
          alignment: 'left',
          fontSize: 5,
          colSpan: 3,
        },
        {},
        {},
      ];
      const lineHeader1 = [
        {
          text:
            '______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
          alignment: 'letf',
          fontSize: 5,
          colSpan: 3,
        },
        {},
        {},
      ];
  
      let content = [header1, lineHeader, header, lineHeader1];
      content = [...content, ...body];
      return content;
    }
  
    GerarDocumento(corpoDocumento) {
      const documento = {
        pageSize: 'A4',
        pageMargins: [14, 53, 14, 48],
        header: function () {
          return {
              margin: [14, 12, 14, 0],
              layout: 'Borders',
              table: {
                widths: ['*'],
                body: [                             
                  [
                    { text: '     IMPOSTO SOBRE A RENDA - PESSOA FÍSICA EXERCÍCIO 2023                                                             ANO-CALENDÁRIO 2022', style: 'reportName' }
                  ]              
                ],
              },
            };
        },
      content: [
        {
              layout: 'noBorders',
              table: {              
                headerRows: 1,
                widths: [ '*', '*', '*' ],
        
                body: corpoDocumento
              }
            },
      ],
      footer(currentPage, pageCount) {
            return {
              layout: 'noBorders',
              margin: [14, 0, 14, 22],
              table: {
                widths: ['auto'],
                body: [
                  [
                    {
                      text:
                        '_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
                      alignment: 'center',
                      fontSize: 5,
                    },
                  ],
                  [
                    [
                      {
                        text: `Página ${currentPage.toString()} de ${pageCount}`,
                        fontSize: 7,
                        alignment: 'right',
                        /* horizontal, vertical */
                        margin: [3, 0],
                      },
                      {
                        text: '© Assinada eletrônicamente',
                        fontSize: 7,
                        alignment: 'center',
                      },
                    ],
                  ],
                ],
              },
            };
          },
      styles: {
        reportName: {
          fontSize: 9,
          bold: true,
          alignment: 'center',
          margin: [0, 4, 0, 0],
        }
      },
      
    };
      return documento;
    }
  }