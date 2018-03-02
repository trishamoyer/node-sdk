/**
 * Copyright 2018 IBM All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as extend from 'extend';
import { RequestResponse } from 'request';
import { createRequest } from '../lib/requestwrapper';
import { getMissingParams } from '../lib/helper';
import { BaseService } from '../lib/base_service';
import { FileObject } from '../lib/helper';

/**
 * Language Translator translates text from one language to another. The service offers multiple domain-specific models that you can customize based on your unique terminology and language. Use Language Translator to take news from across the globe and present it in your language, communicate with your customers in their own language, and more.
 */

class LanguageTranslatorV2 extends BaseService {

  name: string; // set by prototype to 'language_translator'
  serviceVersion: string; // set by prototype to 'v2'

  static URL: string = 'https://gateway.watsonplatform.net/language-translator/api';

  /**
   * Construct a LanguageTranslatorV2 object.
   *
   * @param {Object} options - Options for the service.
   * @param {string} [options.url] - The base url to use when contacting the service (e.g. 'https://gateway.watsonplatform.net/language-translator/api'). The base url may differ between Bluemix regions.
   * @param {string} [options.username] - The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
   * @param {string} [options.password] - The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of Bluemix. When running on Bluemix, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.
   * @param {boolean} [options.use_unauthenticated] - Set to `true` to avoid including an authorization header. This option may be useful for requests that are proxied.
   * @param {Object} [options.headers] - Default headers that shall be included with every request to the service.
   * @param {boolean} [options.headers.X-Watson-Learning-Opt-Out] - Set to `true` to opt-out of data collection. By default, all IBM Watson services log requests and their results. Logging is done only to improve the services for future users. The logged data is not shared or made public. If you are concerned with protecting the privacy of users' personal information or otherwise do not want your requests to be logged, you can opt out of logging.
   * @constructor
   * @returns {LanguageTranslatorV2}
   */
  constructor(options: LanguageTranslatorV2.Options) {
    super(options);
  }

  /*************************
   * translate
   ************************/

  /**
   * Translate.
   *
   * Translates the input text from the source language to the target language.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string[ ]} params.text - Input text in UTF-8 encoding. Multiple entries will result in multiple translations in the response.
   * @param {string} [params.model_id] - Model ID of the translation model to use. If this is specified, the `source` and `target` parameters will be ignored. The method requires either a model ID or both the `source` and `target` parameters.
   * @param {string} [params.source] - Language code of the source text language. Use with `target` as an alternative way to select a translation model. When `source` and `target` are set, and a model ID is not set, the system chooses a default model for the language pair (usually the model based on the news domain).
   * @param {string} [params.target] - Language code of the translation target language. Use with source as an alternative way to select a translation model.
   * @param {Function} [callback] - The callback that handles the response.
   * @returns {NodeJS.ReadableStream|void}
   */
  translate(params: LanguageTranslatorV2.TranslateParams, callback?: LanguageTranslatorV2.Callback<LanguageTranslatorV2.TranslationResult>): NodeJS.ReadableStream | void {
    const _params = extend({}, params);
    const _callback = (callback) ? callback : () => {};
    const requiredParams = ['text'];
    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return _callback(missingParams);
    }
    const body = {
      'text': _params.text,
      'model_id': _params.model_id,
      'source': _params.source,
      'target': _params.target
    };
    const parameters = {
      options: {
        url: '/v2/translate',
        method: 'POST',
        json: true,
        body: body,
      },
      defaultOptions: extend(true, {}, this._options, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
    };
    return createRequest(parameters, _callback);
  };

  /*************************
   * identify
   ************************/

  /**
   * Identify language.
   *
   * Identifies the language of the input text.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.text - Input text in UTF-8 format.
   * @param {Function} [callback] - The callback that handles the response.
   * @returns {NodeJS.ReadableStream|void}
   */
  identify(params: LanguageTranslatorV2.IdentifyParams, callback?: LanguageTranslatorV2.Callback<LanguageTranslatorV2.IdentifiedLanguages>): NodeJS.ReadableStream | void {
    const _params = extend({}, params);
    const _callback = (callback) ? callback : () => {};
    const requiredParams = ['text'];
    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return _callback(missingParams);
    }
    const body = _params.text;
    const parameters = {
      options: {
        url: '/v2/identify',
        method: 'POST',
        json: false,
        body: body,
      },
      defaultOptions: extend(true, {}, this._options, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'text/plain',
        }
      })
    };
    return createRequest(parameters, _callback);
  };

  /**
   * Identify language.
   *
   * Identifies the language of the input text.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.text - Input text in UTF-8 format.
   * @param {Function} [callback] - The callback that handles the response.
   * @returns {NodeJS.ReadableStream|void}
   */
  identifyPlain(params: LanguageTranslatorV2.IdentifyPlainParams, callback?: LanguageTranslatorV2.Callback<LanguageTranslatorV2.IdentifiedLanguages>): NodeJS.ReadableStream | void {
    const _params = extend({}, params);
    const _callback = (callback) ? callback : () => {};
    const requiredParams = ['text'];
    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return _callback(missingParams);
    }
    const body = _params.text;
    const parameters = {
      options: {
        url: '/v2/identify',
        method: 'POST',
        json: false,
        body: body,
      },
      defaultOptions: extend(true, {}, this._options, {
        headers: {
          'Accept': 'text/plain',
          'Content-Type': 'text/plain',
        }
      })
    };
    return createRequest(parameters, _callback);
  };

  /**
   * List identifiable languages.
   *
   * Lists the languages that the service can identify. Returns the language code (for example, `en` for English or `es` for Spanish) and name of each language.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {Function} [callback] - The callback that handles the response.
   * @returns {NodeJS.ReadableStream|void}
   */
  listIdentifiableLanguages(params?: LanguageTranslatorV2.ListIdentifiableLanguagesParams, callback?: LanguageTranslatorV2.Callback<LanguageTranslatorV2.IdentifiableLanguages>): NodeJS.ReadableStream | void {
    const _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
    const _callback = (typeof params === 'function' && !callback) ? params : (callback) ? callback : () => {};
    const parameters = {
      options: {
        url: '/v2/identifiable_languages',
        method: 'GET',
      },
      defaultOptions: extend(true, {}, this._options, {
        headers: {
          'Accept': 'application/json',
        }
      })
    };
    return createRequest(parameters, _callback);
  };

  /*************************
   * models
   ************************/

  /**
   * Create model.
   *
   * Uploads a TMX glossary file on top of a domain to customize a translation model.  Depending on the size of the file, training can range from minutes for a glossary to several hours for a large parallel corpus. Glossary files must be less than 10 MB. The cumulative file size of all uploaded glossary and corpus files is limited to 250 MB.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.base_model_id - The model ID of the model to use as the base for customization. To see available models, use the `List models` method.
   * @param {string} [params.name] - An optional model name that you can use to identify the model. Valid characters are letters, numbers, dashes, underscores, spaces and apostrophes. The maximum length is 32 characters.
   * @param {ReadableStream|FileObject|Buffer} [params.forced_glossary] - A TMX file with your customizations. The customizations in the file completely overwrite the domain translaton data, including high frequency or high confidence phrase translations. You can upload only one glossary with a file size less than 10 MB per call.
   * @param {ReadableStream|FileObject|Buffer} [params.parallel_corpus] - A TMX file that contains entries that are treated as a parallel corpus instead of a glossary.
   * @param {ReadableStream|FileObject|Buffer} [params.monolingual_corpus] - A UTF-8 encoded plain text file that is used to customize the target language model.
   * @param {Function} [callback] - The callback that handles the response.
   * @returns {NodeJS.ReadableStream|void}
   */
  createModel(params: LanguageTranslatorV2.CreateModelParams, callback?: LanguageTranslatorV2.Callback<LanguageTranslatorV2.TranslationModel>): NodeJS.ReadableStream | void {
    const _params = extend({}, params);
    const _callback = (callback) ? callback : () => {};
    const requiredParams = ['base_model_id'];
    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return _callback(missingParams);
    }
    const formData = {
      'forced_glossary': {
        data: _params.forced_glossary,
        contentType: 'application/octet-stream'
      },
      'parallel_corpus': {
        data: _params.parallel_corpus,
        contentType: 'application/octet-stream'
      },
      'monolingual_corpus': {
        data: _params.monolingual_corpus,
        contentType: 'text/plain'
      }
    };
    const query = { 
      'base_model_id': _params.base_model_id,
      'name': _params.name
    };
    const parameters = {
      options: {
        url: '/v2/models',
        method: 'POST',
        qs: query,
        formData: formData
      },
      defaultOptions: extend(true, {}, this._options, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        }
      })
    };
    return createRequest(parameters, _callback);
  };

  /**
   * Delete model.
   *
   * Deletes a custom translation model.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.model_id - Model ID of the model to delete.
   * @param {Function} [callback] - The callback that handles the response.
   * @returns {NodeJS.ReadableStream|void}
   */
  deleteModel(params: LanguageTranslatorV2.DeleteModelParams, callback?: LanguageTranslatorV2.Callback<LanguageTranslatorV2.DeleteModelResult>): NodeJS.ReadableStream | void {
    const _params = extend({}, params);
    const _callback = (callback) ? callback : () => {};
    const requiredParams = ['model_id'];
    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return _callback(missingParams);
    }
    const path = { 
      'model_id': _params.model_id
    };
    const parameters = {
      options: {
        url: '/v2/models/{model_id}',
        method: 'DELETE',
        path: path,
      },
      defaultOptions: extend(true, {}, this._options, {
        headers: {
          'Accept': 'application/json',
        }
      })
    };
    return createRequest(parameters, _callback);
  };

  /**
   * Get model details.
   *
   * Gets information about a translation model, including training status for custom models.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.model_id - Model ID of the model to get.
   * @param {Function} [callback] - The callback that handles the response.
   * @returns {NodeJS.ReadableStream|void}
   */
  getModel(params: LanguageTranslatorV2.GetModelParams, callback?: LanguageTranslatorV2.Callback<LanguageTranslatorV2.TranslationModel>): NodeJS.ReadableStream | void {
    const _params = extend({}, params);
    const _callback = (callback) ? callback : () => {};
    const requiredParams = ['model_id'];
    const missingParams = getMissingParams(_params, requiredParams);
    if (missingParams) {
      return _callback(missingParams);
    }
    const path = { 
      'model_id': _params.model_id
    };
    const parameters = {
      options: {
        url: '/v2/models/{model_id}',
        method: 'GET',
        path: path,
      },
      defaultOptions: extend(true, {}, this._options, {
        headers: {
          'Accept': 'application/json',
        }
      })
    };
    return createRequest(parameters, _callback);
  };

  /**
   * List models.
   *
   * Lists available translation models.
   *
   * @param {Object} [params] - The parameters to send to the service.
   * @param {string} [params.source] - Specify a language code to filter results by source language.
   * @param {string} [params.target] - Specify a language code to filter results by target language.
   * @param {boolean} [params.default_models] - If the default_models parameter isn't specified, the service will return all models (default_models and non-default_models) for each language pair. To return only default_models models, set this to `true`. To return only non-default_models models, set this to `false`.
   * @param {Function} [callback] - The callback that handles the response.
   * @returns {NodeJS.ReadableStream|void}
   */
  listModels(params?: LanguageTranslatorV2.ListModelsParams, callback?: LanguageTranslatorV2.Callback<LanguageTranslatorV2.TranslationModels>): NodeJS.ReadableStream | void {
    const _params = (typeof params === 'function' && !callback) ? {} : extend({}, params);
    const _callback = (typeof params === 'function' && !callback) ? params : (callback) ? callback : () => {};
    const query = { 
      'source': _params.source,
      'target': _params.target,
      'default': _params.default_models
    };
    const parameters = {
      options: {
        url: '/v2/models',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this._options, {
        headers: {
          'Accept': 'application/json',
        }
      })
    };
    return createRequest(parameters, _callback);
  };

}

LanguageTranslatorV2.prototype.name = 'language_translator';
LanguageTranslatorV2.prototype.serviceVersion = 'v2';

/*************************
 * interfaces
 ************************/

namespace LanguageTranslatorV2 {

  /** Options for the `LanguageTranslatorV2` constructor. **/
  export type Options = {
    url?: string;
    username?: string;
    password?: string;
    use_unauthenticated?: boolean;
    headers?: object;
  }

  /** The callback for a service request. **/
  export type Callback<T> = (error: any, body?: T, response?: RequestResponse) => void;

  /** The body of a service request that returns no response data. **/
  export interface Empty { }

  /*************************
   * request interfaces
   ************************/

  /** Parameters for the `translate` operation. **/
  export interface TranslateParams {
    /** Input text in UTF-8 encoding. Multiple entries will result in multiple translations in the response. **/
    text: string[ ];
    /** Model ID of the translation model to use. If this is specified, the `source` and `target` parameters will be ignored. The method requires either a model ID or both the `source` and `target` parameters. **/
    model_id?: string;
    /** Language code of the source text language. Use with `target` as an alternative way to select a translation model. When `source` and `target` are set, and a model ID is not set, the system chooses a default model for the language pair (usually the model based on the news domain). **/
    source?: string;
    /** Language code of the translation target language. Use with source as an alternative way to select a translation model. **/
    target?: string;
  }

  /** Parameters for the `identify` operation. **/
  export interface IdentifyParams {
    /** Input text in UTF-8 format. **/
    text: string;
  }

  /** Parameters for the `identifyPlain` operation. **/
  export interface IdentifyPlainParams {
    /** Input text in UTF-8 format. **/
    text: string;
  }

  /** Parameters for the `listIdentifiableLanguages` operation. **/
  export interface ListIdentifiableLanguagesParams {
  }

  /** Parameters for the `createModel` operation. **/
  export interface CreateModelParams {
    /** The model ID of the model to use as the base for customization. To see available models, use the `List models` method. **/
    base_model_id: string;
    /** An optional model name that you can use to identify the model. Valid characters are letters, numbers, dashes, underscores, spaces and apostrophes. The maximum length is 32 characters. **/
    name?: string;
    /** A TMX file with your customizations. The customizations in the file completely overwrite the domain translaton data, including high frequency or high confidence phrase translations. You can upload only one glossary with a file size less than 10 MB per call. **/
    forced_glossary?: ReadableStream|FileObject|Buffer;
    /** A TMX file that contains entries that are treated as a parallel corpus instead of a glossary. **/
    parallel_corpus?: ReadableStream|FileObject|Buffer;
    /** A UTF-8 encoded plain text file that is used to customize the target language model. **/
    monolingual_corpus?: ReadableStream|FileObject|Buffer;
  }

  /** Parameters for the `deleteModel` operation. **/
  export interface DeleteModelParams {
    /** Model ID of the model to delete. **/
    model_id: string;
  }

  /** Parameters for the `getModel` operation. **/
  export interface GetModelParams {
    /** Model ID of the model to get. **/
    model_id: string;
  }

  /** Parameters for the `listModels` operation. **/
  export interface ListModelsParams {
    /** Specify a language code to filter results by source language. **/
    source?: string;
    /** Specify a language code to filter results by target language. **/
    target?: string;
    /** If the default_models parameter isn't specified, the service will return all models (default_models and non-default_models) for each language pair. To return only default_models models, set this to `true`. To return only non-default_models models, set this to `false`. **/
    default_models?: boolean;
  }

  /*************************
   * model interfaces
   ************************/

  /** DeleteModelResult. **/
  export interface DeleteModelResult {
    /** "OK" indicates that the model was successfully deleted. **/
    status: string;
  }

  /** IdentifiableLanguage. **/
  export interface IdentifiableLanguage {
    /** The language code for an identifiable language. **/
    language: string;
    /** The name of the identifiable language. **/
    name: string;
  }

  /** IdentifiableLanguages. **/
  export interface IdentifiableLanguages {
    /** A list of all languages that the service can identify. **/
    languages: IdentifiableLanguage[ ];
  }

  /** IdentifiedLanguage. **/
  export interface IdentifiedLanguage {
    /** The language code for an identified language. **/
    language: string;
    /** The confidence score for the identified language. **/
    confidence: number;
  }

  /** IdentifiedLanguages. **/
  export interface IdentifiedLanguages {
    /** A ranking of identified languages with confidence scores. **/
    languages: IdentifiedLanguage[ ];
  }

  /** Translation. **/
  export interface Translation {
    /** Translation output in UTF-8. **/
    translation_output: string;
  }

  /** Response payload for models. **/
  export interface TranslationModel {
    /** A globally unique string that identifies the underlying model that is used for translation. **/
    model_id: string;
    /** Optional name that can be specified when the model is created. **/
    name?: string;
    /** Translation source language code. **/
    source?: string;
    /** Translation target language code. **/
    target?: string;
    /** Model ID of the base model that was used to customize the model. If the model is not a custom model, this will be an empty string. **/
    base_model_id?: string;
    /** The domain of the translation model. **/
    domain?: string;
    /** Whether this model can be used as a base for customization. Customized models are not further customizable, and some base models are not customizable. **/
    customizable?: boolean;
    /** Whether or not the model is a default model. A default model is the model for a given language pair that will be used when that language pair is specified in the source and target parameters. **/
    default_model?: boolean;
    /** Either an empty string, indicating the model is not a custom model, or the ID of the service instance that created the model. **/
    owner?: string;
    /** Availability of a model. **/
    status?: string;
  }

  /** The response type for listing existing translation models. **/
  export interface TranslationModels {
    /** An array of available models. **/
    models: TranslationModel[ ];
  }

  /** TranslationResult. **/
  export interface TranslationResult {
    /** Number of words in the input text. **/
    word_count: number;
    /** Number of characters in the input text. **/
    character_count: number;
    /** List of translation output in UTF-8, corresponding to the input text entries. **/
    translations: Translation[ ];
  }

}

export = LanguageTranslatorV2;
