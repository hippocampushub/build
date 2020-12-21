import axios, {AxiosRequestConfig} from "axios";
import constants from "../constants";

const DATASETS_QUERY = 'hippocampal';

const _getEbrainsRequestData = (query: string) => {
    return {
        "aggs": {
            "facet_Dataset_speciesFilter": {
                "aggs": {
                    "speciesFilter.value.keyword": {
                        "terms": {
                            "field": "speciesFilter.value.keyword",
                            "size": 10,
                            "order": {"_count": "desc"}
                        }
                    }, "speciesFilter.value.keyword_count": {"cardinality": {"field": "speciesFilter.value.keyword"}}
                }, "filter": {"term": {"type.value": "Dataset"}}
            },
            "facet_Dataset_embargoForFilter": {
                "aggs": {
                    "embargoForFilter.value.keyword": {
                        "terms": {
                            "field": "embargoForFilter.value.keyword",
                            "size": 10,
                            "order": {"_count": "desc"}
                        }
                    },
                    "embargoForFilter.value.keyword_count": {"cardinality": {"field": "embargoForFilter.value.keyword"}}
                }, "filter": {"term": {"type.value": "Dataset"}}
            },
            "facet_Dataset_modalityForFilter": {
                "aggs": {
                    "modalityForFilter.value.keyword": {
                        "terms": {
                            "field": "modalityForFilter.value.keyword",
                            "size": 10,
                            "order": {"_count": "desc"}
                        }
                    },
                    "modalityForFilter.value.keyword_count": {"cardinality": {"field": "modalityForFilter.value.keyword"}}
                }, "filter": {"term": {"type.value": "Dataset"}}
            },
            "facet_Dataset_methods": {
                "aggs": {
                    "methods.value.keyword": {
                        "terms": {
                            "field": "methods.value.keyword",
                            "size": 1000000000,
                            "order": {"_count": "desc"}
                        }
                    }, "methods.value.keyword_count": {"cardinality": {"field": "methods.value.keyword"}}
                }, "filter": {"term": {"type.value": "Dataset"}}
            },
            "facet_Dataset_protocol": {
                "aggs": {
                    "protocol.value.keyword": {
                        "terms": {
                            "field": "protocol.value.keyword",
                            "size": 1000000000,
                            "order": {"_count": "desc"}
                        }
                    }, "protocol.value.keyword_count": {"cardinality": {"field": "protocol.value.keyword"}}
                }, "filter": {"term": {"type.value": "Dataset"}}
            },
            "facet_type": {
                "aggs": {
                    "type.value": {"terms": {"field": "type.value", "size": 50}},
                    "type.value_count": {"cardinality": {"field": "type.value"}}
                }, "filter": {"match_all": {}}
            }
        },
        "from": 0,
        "post_filter": {"term": {"type.value": "Dataset"}},
        "size": 20,
        "highlight": {
            "fields": {
                "title.value": {},
                "contributors.value": {},
                "component.value": {},
                "owners.value": {},
                "description.value": {}
            }, "encoder": "html"
        },
        "sort": [{"_score": {"order": "desc"}}, {"first_release.value": {"order": "desc", "missing": "_last"}}],
        "query": {
            "query_string": {
                "query": `(${query}* OR ${query}* OR ${query}~)`,
                "lenient": true,
                "analyze_wildcard": true,
                "fields": ["abstractionLevel.value^1", "age.value^1", "agecategory.value^1", "allfiles.value^1", "appCategory.value^1", "atlas.value^1", "brainStructures.value^1", "cellularTarget.value^1", "citation.value^1", "component.value^10", "contributions.value^1", "contributors.value^10", "custodianOf.value^1", "custodianOfModel.value^1", "dataDescriptor.value^1", "dataset.value^1", "datasetExists.value^1", "datasets.children.component.value^1", "datasets.children.name.value^1", "datasets.value^1", "description.value^2", "documentation.value^1", "doi.value^1", "editorId.value^1", "embargo.value^1", "embargoForFilter.value^1", "embargoRestrictedAccess.value^1", "external_datalink.value^1", "features.value^1", "files.value^1", "genotype.value^1", "homepage.value^1", "identifier.value^1", "license.value^1", "license_info.value^1", "mainContact.value^1", "methods.value^1", "modalityForFilter.value^1", "modelContributions.value^1", "modelFormat.value^1", "modelScope.value^1", "operatingSystem.value^1", "owners.value^10", "parcellationAtlas.value^1", "preparation.value^1", "producedDataset.value^1", "protocol.value^1", "publications.value^1", "region.value^1", "samples.value^1", "sex.value^1", "sourceCode.value^1", "species.value^1", "speciesFilter.value^1", "strain.value^1", "studyTarget.value^1", "subject.children.age.value^1", "subject.children.agecategory.value^1", "subject.children.genotype.value^1", "subject.children.sex.value^1", "subject.children.species.value^1", "subject.children.strain.value^1", "subject.children.subject_name.value^1", "subject.children.weight.value^1", "subject.value^1", "subjects.children.age.value^1", "subjects.children.agecategory.value^1", "subjects.children.genotype.value^1", "subjects.children.samples.value^1", "subjects.children.sex.value^1", "subjects.children.species.value^1", "subjects.children.strain.value^1", "subjects.children.subject_name.value^1", "subjects.children.weight.value^1", "subjects.value^1", "title.value^20", "useHDG.value^1", "usedDataset.value^1", "version.value^1", "viewer.value^1", "weight.value^1", "weightPreFixation.value^1", "zip.value^1"]
            }
        }
    }
}
const _getEbrainsDataSetConfig: (query: string) => AxiosRequestConfig = (query: string) => {
    return {
        url: constants.EXTERNAL_API_URLS.EBRAINS_KNOWLEDGE_GRAPH,
        data: _getEbrainsRequestData(query),
        method: 'post',
    }
}

const _parseSuccessfullResponse = (response) => {
    if (!!response && response.status === 200) {
        if (!!response.data) {
            return response.data;
        }
    }
    return null;
}

const _parseResponseFromEbrains = (response) => {
    const result = _parseSuccessfullResponse(response);
    if (!!result) {
        const hits = result?.hits?.hits ?? [];
        return hits.map((item) => ({
            title: item['_source'].title,
            description: item['_source'].description,
        }));
    }
}

const _retrieveDataSetFromEbrains = async (query: string) => {
    try {
        const response = await axios(_getEbrainsDataSetConfig(query));
        return _parseResponseFromEbrains(response);
    } catch (error) {
        console.log('@@@@@@error retrieving json_data from ebrains');
        console.log(error);
    }
}

const retrieveDataSetByQuery = async (query: string) => {
    try {
        const items = await _retrieveDataSetFromEbrains(query);
        return items;
    } catch (error) {
        console.log('@@@@@@@error');
        console.log(error);
    }
}

const getDataSets = async () => {
    const query = DATASETS_QUERY;
    try {
        const items = await retrieveDataSetByQuery(query);
        return items;
    } catch (error) {

    }
}

export {
    //getDataSets
}
