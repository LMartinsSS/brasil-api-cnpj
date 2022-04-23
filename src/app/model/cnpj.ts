export interface CnpjBrasilApi{
    bairro: string,
    capital_social: number,
    cep: string,
    cnae_fiscal: number,
    cnae_fiscal_descricao: string,
    cnaes_secundarios: CNAES_SECUNDARIOS,
    cnpj: string,
    codigo_municipio: number,
    codigo_natureza_juridica: number,
    codigo_pais: number,
    codigo_porte: number,
    complemento: string,
    data_exclusao_do_mei: string,
    data_exclusao_do_simples: string,
    data_inicio_atividade: string,
    data_opcao_pelo_mei: string,
    data_opcao_pelo_simples: string,
    data_situacao_cadastral: string,
    data_situacao_especial: string,
    ddd_fax: string,
    ddd_telefone_1: string,
    ddd_telefone_2: string,
    descricao_motivo_situacao_cadastral: string,
    descricao_porte: string,
    descricao_situacao_cadastral: string,
    descricao_tipo_de_logradouro: string,
    ente_federativo_responsavel: string,
    identificador_matriz_filial: number,
    logradouro: string,
    motivo_situacao_cadastral: number,
    municipio: string,
    natureza_juridica: string,
    nome_cidade_no_exterior: string,
    nome_fantasia: string,
    numero: string,
    opcao_pelo_mei: string,
    opcao_pelo_simples: string,
    pais: string,
    porte: string,
    qsa: QSA,
    qualificacao_do_responsavel: number,
    razao_social: string,
    situacao_cadastral: number,
    situacao_especial: string,
    uf: string
}

export interface CNAES_SECUNDARIOS {
    codigo: number,
    descricao: string   
}

interface QSA {
    cnpj_cpf_do_socio: string,
    codigo_faixa_etaria: number,
    codigo_pais: number,
    codigo_qualificacao_representante_legal: number,
    codigo_qualificacao_socio: number,
    cpf_representante_legal: string,
    data_entrada_sociedade: string,
    faixa_etaria: string,
    identificador_de_socio: number,
    nome_representante_legal: string,
    nome_socio: string,
    pais: string,
    qualificacao_representante_legal:string,
    qualificacao_socio: string
}